package tw.com.younite.service.exception;

public class EmailDuplicatedException extends ServiceException {
    public EmailDuplicatedException() {
        super();
    }

    public EmailDuplicatedException(String message) {
        super(message);
    }

    public EmailDuplicatedException(String message, Throwable cause) {
        super(message, cause);
    }

    public EmailDuplicatedException(Throwable cause) {
        super(cause);
    }

    protected EmailDuplicatedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
