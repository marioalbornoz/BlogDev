export const getPost = async({guardarPost}) => {
    const res = await fetch(`http://127.0.0.1:8000/api/`);
    const response = await res.json();
    console.log(response);
    guardarPost(response);
}