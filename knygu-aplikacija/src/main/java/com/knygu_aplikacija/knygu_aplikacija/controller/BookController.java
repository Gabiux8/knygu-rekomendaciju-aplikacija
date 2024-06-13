import com.knygu_aplikacija.knygu_aplikacija.model.Book;
import com.knygu_aplikacija.knygu_aplikacija.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/recommendations")
    public List<Book> getRecommendations(@RequestParam String genre, @RequestParam Double minRating) {
        return bookService.getRecommendations(genre, minRating);
    }

    // Additional endpoints for book operations
}
