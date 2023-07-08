package tw.com.younite.service.inter;

import java.util.List;

public interface IInterestService {
    void setInterests(Integer userID, List<String> interest);
    List<String> getInterests(Integer userID);
    void removeInterests(Integer userID);
}
