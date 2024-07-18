package com.updown.exercise.exhandler;

import com.updown.exercise.exception.ExerciseRecordExistedException;
import com.updown.weight.exception.WeightExistedException;
import com.updown.weight.exception.WeightNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = {"com.updown.exercise"})
public class ExerciseExceptionHandler {

    private void makeErrorMessage(StringBuilder errorMessage, Exception e) {
        StackTraceElement[] stackTrace = e.getStackTrace();

        if (stackTrace.length > 0) {
            StackTraceElement topFrame = stackTrace[0];
            String className = topFrame.getClassName();
            String methodName = topFrame.getMethodName();

            errorMessage.append(className).append(".").append(methodName).append(": ");
        }
    }

//    @ExceptionHandler(WeightNotFoundException.class)
//    protected ResponseEntity<String> WeightNotFoundExceptionHandler(WeightNotFoundException e) {
//        StringBuilder errorMessage = new StringBuilder();
//
//        makeErrorMessage(errorMessage, e);
//
//        errorMessage.append("해당 날짜에 체중기록이 존재하지 않습니다.");
//        return ResponseEntity.badRequest().body(errorMessage.toString());
//    }

    @ExceptionHandler(ExerciseRecordExistedException.class)
    protected ResponseEntity<String> ExerciseRecordExistedExceptionHandler(ExerciseRecordExistedException e) {
        StringBuilder errorMessage = new StringBuilder();

        makeErrorMessage(errorMessage, e);

        errorMessage.append("해당 날짜에 이미 운동을 기록하였습니다.");
        return ResponseEntity.badRequest().body(errorMessage.toString());
    }

}
