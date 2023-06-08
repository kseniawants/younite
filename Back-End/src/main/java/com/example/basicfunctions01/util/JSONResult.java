package com.example.basicfunctions01.util;

import lombok.Data;

import java.io.Serializable;

@Data
public class JSONResult<E> implements Serializable {
    private Integer state;
    private String message;
    //泛型數據
    private E data;

    //構造函數
    public JSONResult() {
    }
    public JSONResult(Integer state) {
        this.state = state;
    }

    public JSONResult(Throwable eMessage) {
        this.message = eMessage.getMessage();
    }

    public JSONResult(Integer state, E data) {
        this.state = state;
        this.data = data;
    }
}
