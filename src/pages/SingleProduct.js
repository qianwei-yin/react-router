import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
	// grab the id from the site url. then use it when rendering.
	const { productId } = useParams();

	const product = products.find((product) => product.id === productId);

	return (
		<section className="section product">
			<article>
				<h4>{product.name}</h4>
				<img src={product.image} alt={product.name} />
			</article>
			<Link to="/products">back to products</Link>
		</section>
	);
};

export default SingleProduct;
