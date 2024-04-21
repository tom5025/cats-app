import { useQuery } from "@tanstack/react-query"
import { CatService } from "@/services";
import { retryDelayWithJitter } from "@/lib";

export const useCats = () => {
    const { data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ['cats'],
        queryFn: async () => {
            return await new CatService().getCats();
        },
        retryDelay: retryDelayWithJitter,
    })

    return {data, isLoading, isFetching, refetch};
}