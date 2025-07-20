import { useEffect } from "react";
import { useLocation } from "react-router";

const useClickOutside = (ref, callback) => {
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
    useEffect(() => {
        callback(); 
    }, [location.pathname]);
};

export default useClickOutside;