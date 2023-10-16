package com.stud.feedback.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stud.feedback.constant.Api;
import com.stud.feedback.dto.request.FeedbackRequest;
import com.stud.feedback.dto.response.FeedbackResponse;
import com.stud.feedback.model.Feedback;
import com.stud.feedback.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController

@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping("/postFeedback")
    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback request) {
        return feedbackService.saveFeedback(request);
    }

    @GetMapping("/getAll")
    public List<FeedbackResponse> getFeedbacks() {
       return feedbackService.getFeedbacks();
        // return !feedbackList.isEmpty() ? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
    }
}
