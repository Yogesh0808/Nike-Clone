import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants';

class CustomerReviews extends Component {
    state = {  } 
    render() { 
        return (
        <section id="" className="max-container">
        <h3 className="font-bold font-palanquin text-center text-4xl">What Our
        <span className="text-coral-red"> Customers
        </span> Say?</h3>
        <p className="info-text mt-4 m-auto max-w-lg text-center">Here genuine stores from our satisafied customers about thier expectional Experienece with us.</p>
        <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
            <ReviewCard 
            key={review.id} 
            imgURL={review.imgURL}
            name={review.name}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}

            />
        ))}
            </div>
        </section>
        );
    }
}
 
export default CustomerReviews;
