"use client"

const { useSearchParams, useRouter } = require("next/navigation")

const Filter = ()=> {

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (filter)=> {
        
    }

    return (
        <div className="flex">
            <button className="p-3 border border-primary-900"
                onClick={()=> handleFilter("all")}
            >
                All cabins
            </button>
            <button className="p-3 border border-primary-900"
                onClick={()=> handleFilter("small")}
            >
                small cabins
            </button>
            <button className="p-3 border border-primary-900"
                onClick={()=> handleFilter("medium")}
            >
                medium cabins
            </button>
            <button className="p-3 border border-primary-900"
                onClick={()=> handleFilter("large")}
            >
                large cabins
            </button>
        </div>
    )
}

export default Filter;