package com.knygu_aplikacija.knygu_aplikacija.repository;

import com.knygu_aplikacija.knygu_aplikacija.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByGenre(String genre);
    List<Book> findByRatingGreaterThan(Double rating);
}
