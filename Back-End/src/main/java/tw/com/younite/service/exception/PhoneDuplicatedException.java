package tw.com.younite.service.exception;

public class PhoneDuplicatedException extends ServiceException {
    public PhoneDuplicatedException() {
        super();
    }

    public PhoneDuplicatedException(String message) {
        super(message);
    }

    public PhoneDuplicatedException(String message, Throwable cause) {
        super(message, cause);
    }

    public PhoneDuplicatedException(Throwable cause) {
        super(cause);
    }

    protected PhoneDuplicatedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
