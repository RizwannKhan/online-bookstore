package com.onlinestore.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onlinestore.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
