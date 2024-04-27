import React, { useEffect } from 'react';

const GoogleAuth: React.FC = () => {
  useEffect(() => {
    const handleCredentialResponse = (response: { credential: string }) => {
      console.log('Encoded JWT ID token: ', response.credential);
      // Here you should send the token to your backend to verify the user and create a session
    };

    console.debug('client id is : ' + process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

    (window as any).google?.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
    });

    (window as any).google?.accounts.id.renderButton(
      document.getElementById('signInDiv')!,
      { theme: 'outline', size: 'large' } 
    );

    //(window as any).google?.accounts.id.prompt(); 
  }, []);

  return <div id="signInDiv"></div>; 
};

export default GoogleAuth;