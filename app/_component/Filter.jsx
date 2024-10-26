"use client"

const { useSearchParams, useRouter, usePathname } = require("next/navigation")

const Filter = ()=> {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const activeFilter = searchParams.get("capacity") ?? "all";

    const handleFilter = (filter)=> {
        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex">
            <Button 
                filter="all"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                All cabins
            </Button>
            <Button 
                filter="small"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                small cabins
            </Button>
            <Button 
                filter="medium"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                medium cabins
            </Button>
            <Button 
                filter="large"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                large cabins
            </Button>
        </div>
    )
}

function Button (
    { filter, handleFilter, activeFilter, children }
) {
    return (
        <button className={`p-3 border border-primary-900
            ${filter === activeFilter && "bg-primary-700 text-primary-50"}`}
            onClick={()=> handleFilter(filter)}
        >
            {children}
        </button>
    )
}

export default Filter;