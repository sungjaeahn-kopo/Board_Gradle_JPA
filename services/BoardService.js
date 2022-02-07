export async function getBoard() {
    const response = await fetch('/api/board');
    return await response.json();
}

// 게시물 생성 수정필요
export async function createBoard(data) {
    const response = await fetch('/api/save', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({board:data})
    })
    return await response.json();
    
}