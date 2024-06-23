import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
          <TestimonialCard name="Jessica Anderson" description="This is the best Italian food that I've ever had!"/>
          <TestimonialCard name="Sophia Campbell" description="My Golden Retriever, Max, really loved the cozy vibes and delicious treats here."/>
          <TestimonialCard name="Emily Phillips" description="I've had some great Japanese food before, but none of them beats Sushi Haven in flavor and presentation."/>
          <TestimonialCard name="Daniel Thompson" description="Great sushi, friendly staff, vibrant atmosphere. A great place to unwind after work."/>
          <TestimonialCard name="Olivia White" description="The sushi here really satisfied my cravings after a busy day at the office."/>
          <TestimonialCard name="Matthew Robinson" description="I came to Sushi Haven after a long drive from the coast. The sushi here tasted so fresh and delicious after the trip."/>
          <TestimonialCard name="Lucas Edwards" description="The sushi here was amazing!! Everyone should visit this place at least once if they're in New York."/>
          <TestimonialCard name="Isabella Martinez" description="This restaurant served as a perfect lunch spot for me after a hectic morning. I would definitely dine here again!"/>

             </Carousel>
    )
}