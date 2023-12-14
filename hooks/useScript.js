import { useEffect,useState } from 'react';

const useScript = url => {
    const [status,setStatus] = useState(false)
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);
        script.onload = () => {
            setStatus(true)
        }
        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
    return status
};

export default useScript;