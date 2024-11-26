// import {useLocation, useNavigate} from "react-router-dom";
// import ButtonSubmitDefault from "../Buttons/ButtonSubmitDefault.jsx";
// import {useEffect, useState} from "react";
// import {useSelector} from "react-redux";
// import useCreateReview from "../../hooks/useCreateReview.jsx";
//
// const ReviewReadArtist = ({ reviewId }) => {
//     const [reviewTitle, setReviewTitle] = useState('');
//     const [reviewBody, setReviewBody] = useState('');
//     const [spotifyId, setSpotifyId] = useState('');
//     const [name, setName] = useState('');
//     const [coverImage, setCoverImage] = useState('');
//    
//     const userId = useSelector((state) => state.user.userData);
//     const reviews = useSelector((state) => state.reviewArtistData.items);
//     const review = reviews.find((review) => review.id === reviewId);
//
//     useEffect(() => {
//         if (review) {
//             setReviewTitle(review.title || '');
//             setReviewBody(review.body || '');
//             setSpotifyId(review.spotifyId || '');
//             setName(review.name || '');
//             setCoverImage(review.coverImage || '');
//         }
//     }, [review]);
//    
//     const [errorReview, setErrorReview] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//    
//     const to = location.state?.from || "/artists";
//    
//     const getSubmitData = async (e) => {
//         e.preventDefault();
//         setErrorReview("");
//         setIsLoading(true);
//         try {
//             const data = { spotifyId, coverImage, reviewTitle, reviewBody, reviewType ,userId };
//             const res = await createReview(data);
//             if (res === 200)
//                 navigate(to);
//         } catch (error) {
//             setErrorReview(error.message || "Failed to register. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };
//    
//     return (
//         <div className="flex flex-col justify-start pt-6 items-center min-h-[60vh]">
//
//             <div className="max-w-lg w-[95vw] p-6">
//                 <h2 className="text-xl font-semibold text-start mt-2 mb-2">A new review about: "{item.name}"</h2>
//                 <form onSubmit={getSubmitData}>
//                     <div className="mb-4">
//                         <label htmlFor="reviewTitle" className="block mb-2 text-sm text-accent-content">
//                             Review title 
//                         </label>
//                         <input
//                             name="reviewTitle"
//                             id="reviewTitle"
//                             type="text"
//                             value={reviewTitle}
//                             onChange={(e) => setReviewTitle(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="reviewBody" className="block mb-2 text-sm text-accent-content">
//                             Review (accepts HTML)
//                         </label>
//                         <textarea
//                             name="reviewBody"
//                             id="reviewBody"
//                             value={reviewBody}
//                             onChange={(e) => setReviewBody(e.target.value)}
//                             required
//                             rows={5}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//                         />
//                     </div>
//
//                     <div className="text-center">
//                         {errorReview && <p className="text-error text-sm mt-2">{errorReview}</p>}
//                         <ButtonSubmitDefault
//                             buttonName={isLoading ? "Sending review..." : "Send the review"}
//                             type="submit"
//                             disabled={isLoading || reviewTitle === "" || reviewBody === ""}
//                         />
//                     </div>
//                 </form>
//                 {error && <p className="text-error text-sm mt-2">{error}</p>}
//             </div>
//         </div>
//     )
// }
// export default ReviewReadArtist;