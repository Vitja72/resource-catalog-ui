import React, { useState } from "react";


const FeedbackForm = ( { resourceId }) => {
    const [feedbackText, setFeedbackText] = useState('');
    const [IsSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
       event.preventDefault();
       setIsSubmitting(true);

       console.log(`Feedback für Ressource ${resourceId}:`, feedbackText);
       await new Promise(resolve => setTimeout(resolve, 1000));

       setIsSubmitting(false);
       setFeedbackText('');
       alert(`Feedback für Ressource: ${resourceId} wurde erfolgreich gespeichert!`)
    };

    return (
        <div>

        </div>

    );
};

export default FeedbackForm;