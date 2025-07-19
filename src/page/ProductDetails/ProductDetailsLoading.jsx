import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductDetails.css"

function ProductDetailsLoading() {
    return (
        <SkeletonTheme baseColor="#f9f1fb" highlightColor="#e1e7ef">
            <div className="product-details-loading">
                <div className="product-image-skeleton">
                    <Skeleton height={350} width={350} circle={false} />
                </div>
                <div className="product-info-skeleton">
                    <Skeleton height={40} width={250} style={{ marginBottom: 16 }} />
                    <Skeleton height={25} width={120} style={{ marginBottom: 12 }} />
                    <div className="product-rating-skeleton">
                        <Skeleton height={20} width={100} style={{ marginRight: 8 }} />
                        <Skeleton height={20} width={40} />
                    </div>
                    <Skeleton count={4} height={16} width={`90%`} style={{ marginBottom: 8 }} />
                    <div className="product-action-skeleton">
                        <Skeleton height={45} width={160} borderRadius={24} />
                        <Skeleton height={45} width={45} circle={true} style={{ marginLeft: 16 }} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default ProductDetailsLoading;
