export interface UseHttpInterface<T> {
    isLoading:boolean
    isError:boolean
    data:T|undefined,
}

export interface Pagination<T>{
    total:number
    page:number
    itemPerPage:number,
    results:T
}