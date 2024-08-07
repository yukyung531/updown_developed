package com.updown.diet.entity;

import com.updown.member.entity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;


@Entity
@Data
@Builder
@Table(name = "diet")
@RequiredArgsConstructor
@AllArgsConstructor
public class Diet {

    @Id
    @Column(name = "diet_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer dietId;

    @ManyToOne
    @JoinColumn(name="member_id")
    private Member member;

    /**
     * breakfast, lunch, snack, dinner
     */
    @Column(name = "category", nullable = false)
    @Enumerated(EnumType.STRING)
    private DietCategory category;

    @Column(name = "diet_total_intake", nullable = false)
    private float dietTotalIntake;

    @Column(name = "diet_total_calories", nullable = false)
    private float dietTotalCalories;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;

    @Column(name = "diet_img")
    private String dietImg;

    @Column(name = "is_fast", nullable = false)
    private Boolean isFast;
}
