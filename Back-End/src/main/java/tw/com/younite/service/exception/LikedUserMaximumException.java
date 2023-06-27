package tw.com.younite.service.exception;

public class LikedUserMaximumException extends ServiceException {
    public LikedUserMaximumException() {
        super();
    }

    public LikedUserMaximumException(String message) {
        super(message);
    }

    public LikedUserMaximumException(String message, Throwable cause) {
        super(message, cause);
    }

    public LikedUserMaximumException(Throwable cause) {
        super(cause);
    }

    protected LikedUserMaximumException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
