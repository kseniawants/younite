package tw.com.younite.util;

import org.springframework.stereotype.Component;
import tw.com.younite.entity.InterestEntity;

import java.util.*;

@Component
public class DataTransferUtil {

    // 計算年齡
    public int calculateAge(Date birthday) {
        Calendar birthDate = Calendar.getInstance();
        birthDate.setTime(birthday);
        Calendar currentDate = Calendar.getInstance();

        int age = currentDate.get(Calendar.YEAR) - birthDate.get(Calendar.YEAR);
        if (currentDate.get(Calendar.MONTH) < birthDate.get(Calendar.MONTH) ||
                (currentDate.get(Calendar.MONTH) == birthDate.get(Calendar.MONTH) &&
                        currentDate.get(Calendar.DAY_OF_MONTH) < birthDate.get(Calendar.DAY_OF_MONTH))) {
            age--;
        }
        return age;
    }

    // 解析興趣表格
    public List<String> parseInterests(String interestString) {
        String[] interests = interestString.replaceAll("[\\[\\]]", "").split(", ");
        return Arrays.asList(interests);
    }

    public List<String> parseInterestEntities(List<InterestEntity> entities) {
        List<String> results = new ArrayList<>();
        for (InterestEntity entity: entities) {
            results.add(entity.getInterest());
        }
        return results;
    }
}
