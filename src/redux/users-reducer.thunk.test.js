import {follow, toggleFollowing, toggleFollowSuccess, unfollow} from "./users-reducer";
import {userAPI} from "../api/api";

jest.mock('../api/api');
const userAPIMock = userAPI;

const result = {
    resultCode: 0,
    messages:[],
    data: {}
}

userAPIMock.postFollow.mockReturnValue(Promise.resolve(result));
userAPIMock.deleteFollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
    const thunk = follow(1);
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowing(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleFollowSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowing(false, 1));
})

test('success unfollow thunk', async () => {
    const thunk = unfollow(1);
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowing(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleFollowSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowing(false, 1));
})