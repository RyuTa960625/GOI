package ssafy.GeniusOfInvestment.square_room.dto.request;

import lombok.Builder;
import lombok.Getter;


@Builder
public record RoomEnterRequest(
        Long roomId,
        int roomNum,
        String password
) {
}
