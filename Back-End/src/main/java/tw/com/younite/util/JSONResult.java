package tw.com.younite.util;

import lombok.Data;

import java.io.Serializable;

@Data
public class JSONResult<T> implements Serializable {
    private Integer status;
    private String message;
    //泛型數據
    private T data;

    //構造函數
    public JSONResult() {
    }
    public JSONResult(Integer state) {
        this.status = state;
    }

    public JSONResult(Throwable eMessage) {
        this.message = eMessage.getMessage();
    }

    public JSONResult(Integer state, T data) {
        this.status = state;
        this.data = data;
    }

    public JSONResult(Integer state, String message) {
        this.status = state;
        this.message = message;
    }

    public JSONResult(Integer state, String message, T data) {
        this.status = state;
        this.message = message;
        this.data = data;
    }
}
