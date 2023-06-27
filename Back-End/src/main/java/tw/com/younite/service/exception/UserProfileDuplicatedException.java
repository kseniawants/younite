package tw.com.younite.service.exception;

public class UserProfileDuplicatedException extends ServiceException {
    public UserProfileDuplicatedException() {
        super();
    }

    public UserProfileDuplicatedException(String message) {
        super(message);
    }

    public UserProfileDuplicatedException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserProfileDuplicatedException(Throwable cause) {
        super(cause);
    }

    protected UserProfileDuplicatedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
