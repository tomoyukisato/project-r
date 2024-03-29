import { Link } from "react-router-dom";
import { Review } from "../molecles/Review";

export const Restaurant = (restaurant: RestaurantProp) =>(
    <article className="box">
        <div className="columns">
            <div className="columns is-3">
                <figure className="image is-squire">
                    <img 
                    src={restaurant.image || "/images/restaurants/noimages.png"} 
                    alt={restaurant.name} 
                    />
                </figure>
            </div>
            <div className="column">
                <h3 className="title is-5">
                    <Link
                        className="has-text-dark"
                        to={`/restaurnants/${restaurant.id}`}
                    >
                        {restaurant.name}
                    </Link>
                </h3>
                <div>
                    {restaurant.reviews.length === 0 ? (
                    <p>
                        レビューがまだありません。
                        <br />
                        <Link to={`/restaurants/${restaurant.id}`}>
                        レビューを投稿する。
                        </Link>
                    </p>
                    ) : (
                    restaurant.reviews.map((review: ReviewProps) => {
                        return <Review review={review} />;
                    })
                    )}
                </div>
            </div>
        </div>
    </article>
);