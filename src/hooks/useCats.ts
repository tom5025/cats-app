import { keepPreviousData, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query"
import { CatService } from "@/services";
import { retryDelayWithJitter } from "@/lib";
import { useState } from "react";
import { Cat } from "@/types";

export const useCats = (page: number) => {
    const queryClient = useQueryClient();
    const [allData, setAllData] = useState<Cat[]>([]);
    const { data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ['cats', page],
        queryFn: async () => {
            const newData = await new CatService().getCats(page); 
            setAllData([...allData,...newData]);
            return newData;
        },
        retryDelay: retryDelayWithJitter,
        staleTime: 5000,
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });

    return {data: allData, isLoading, isFetching, refetch};
}