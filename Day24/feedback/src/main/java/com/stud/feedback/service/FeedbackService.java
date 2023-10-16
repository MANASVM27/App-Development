package com.stud.feedback.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.stud.feedback.dto.request.FeedbackRequest;
import com.stud.feedback.dto.response.FeedbackResponse;
import com.stud.feedback.model.Feedback;

public interface FeedbackService {

    ResponseEntity<Feedback> saveFeedback(Feedback request);

    List<FeedbackResponse> getFeedbacks();

}
