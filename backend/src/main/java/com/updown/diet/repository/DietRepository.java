package com.updown.diet.repository;

import com.updown.diet.entity.Diet;
import com.updown.diet.entity.DietCategory;
import com.updown.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
public interface DietRepository extends JpaRepository<Diet, Integer> {
    Optional<Diet> findByMemberAndRegDateAndCategory(Member member, LocalDate regDate, DietCategory category);

    Optional<Diet> findByMemberAndDietIdAndCategory(Member member, Integer dietId, DietCategory category);

    List<Diet> findByMemberAndRegDate(Member member, LocalDate regDate);
}