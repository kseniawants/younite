package tw.com.younite.util;

import lombok.Data;

import java.io.Serializable;
//序列化
@Data
public class JSONResult<T> implements Serializable {
    private Integer state;
    private String message;
    //泛型數據
    private T data;

    //構造函數
    public JSONResult() {
    }
    public JSONResult(Integer state) {

        this.state = state;
    }

    public JSONResult(Throwable eMessage) {

        this.message = eMessage.getMessage();
    }

    public JSONResult(Integer state, T data) {
        this.state = state;
        this.data = data;
    }
}
