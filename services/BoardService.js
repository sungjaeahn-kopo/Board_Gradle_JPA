import { useRouter } from "next/router";
import { useCallback } from "react";

export async function getBoard() {
    const response = await fetch('/api/board');
    return await response.json();
}

// 게시물 생성 수정필요
export async function createBoard(data) {
    console.log("data!!!!!!!!!!! : " + data);
    const response = await fetch(`/api/save`, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({board:data})
    })
    console.log("fetch data : " + response);
    return await response.json();
    
}

// userouter
// export default function postBoard() {
//     const router = useRouter
//     const handleSubmit = useCallback((e) => {
//         e.preventDefault()

//         fetch('/api/save', {
//             method : 'POST',
//             headers : {'CONTENT-TYPE' : 'application/json'},
//             body : JSON.stringify({

//             }),
//         }).then((res) => {
//             if(res.ok) router.push('/')
//         })
//     }, [])



// }