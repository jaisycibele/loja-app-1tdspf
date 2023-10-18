export default function ProdutoSlug({params}){
    return (
        <>
        <div>
        <h1>Produto Slug</h1>
        <p>Slug: {params.slug}</p>
        </div>
        </>
    );
}