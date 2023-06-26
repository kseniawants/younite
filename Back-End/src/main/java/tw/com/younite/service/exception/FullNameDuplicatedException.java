package tw.com.younite.service.exception;

public class FullNameDuplicatedException extends ServiceException {
    public FullNameDuplicatedException() {
        super();
    }

    public FullNameDuplicatedException(String message) {
        super(message);
    }

    public FullNameDuplicatedException(String message, Throwable cause) {
        super(message, cause);
    }

    public FullNameDuplicatedException(Throwable cause) {
        super(cause);
    }

    protected FullNameDuplicatedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
