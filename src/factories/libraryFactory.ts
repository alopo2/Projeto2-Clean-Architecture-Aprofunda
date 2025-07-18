import { LibraryService } from '../services/libraryService';
import { MongoBookRepository } from '../infra/database/mongoBookRepository';

const bookRepository = new MongoBookRepository();
const libraryService = new LibraryService(bookRepository);

export default libraryService;