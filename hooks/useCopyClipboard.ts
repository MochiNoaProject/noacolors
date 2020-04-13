import { useEffect, useState } from "react"
import copy from "copy-to-clipboard"

interface Options {
    successDuration?: number
}

export const useCopyClipboard = (text: string, options?: Options): [boolean, () => void] => {
    const [isCopied, setIsCopied] = useState(false)
    const successDuration = options && options.successDuration

    useEffect(() => {
        let id = 0
        if (isCopied && successDuration) {
            id = window.setTimeout(() => {
                setIsCopied(false)
            }, successDuration)
        }

        return () => {
            clearTimeout(id)
        }
    }, [isCopied, successDuration])

    return [
        isCopied,
        () => {
            const didCopy = copy(text)
            setIsCopied(didCopy)
        },
    ]
}
