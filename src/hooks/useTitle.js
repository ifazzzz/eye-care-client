import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Eye-care`;
    },[title])
}

export default useTitle