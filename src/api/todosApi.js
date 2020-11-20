export async function getTodos() {
    const response = await fetch('/api/todos/getTodos');
    return response.json();
}

export async function createTodo(todo) {
    const response = await fetch('/api/todos/createTodo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(todo),
        });
    return response.json();
}

export async function changeTodoStatus(id, status) {
    const response = await fetch('/api/todos/changeTodoStatus',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ id, status }),
        });
    return response.json();
}