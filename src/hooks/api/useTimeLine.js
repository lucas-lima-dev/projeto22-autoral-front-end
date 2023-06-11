import { useState, useEffect } from "react";
import axios from "axios";

function useTimeLine(token, isResponseEdited, isPostDeleted, isPostCreated) {
    const [timelineContent, setTimelineContent] = useState([]);

    useEffect(() => {
        const URL = `${import.meta.env.VITE_API_BASE_URL}/timeline`;
        const header = { headers: { Authorization: `Bearer ${token}` } };
        
        try {
            const response = axios.get(URL, header);
            setTimelineContent(response.data);
        } catch (error) {
            console.log(error);
        }

    }, [token, isResponseEdited, isPostDeleted, isPostCreated]);

    return timelineContent;
}

export default useTimeLine;
