const { UserService } = require("../../../src/services");
const { UserRepository, UserRepositoryMock } = require("../../mocks");
const { 
    UserModelMock : { user, users}
} = require("../../mocks");
const userRepositoryMock = require("../../mocks/user/user.repository.mock");

describe("user Service", ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it("should find an user by id", async()=>{
        const UserRepository = UserRepositoryMock;
        UserRepository.get.mockReturnValue(user);
        const _userService = new UserService({UserRepository});
        const expected = await _userService.get(user._id);
        expect(expected).toMatchObject(user);

    })

    it("should find an user by username", async()=>{
        const UserRepository = UserRepositoryMock;
        UserRepository.getUserByUserName.mockReturnValue(user);
        const _userService = new UserService({UserRepository});
        const expected = await _userService.getUserByUserName(user.username);
        expect(expected).toMatchObject(expected);
    })

    it("should return an user collection", async()=>{
        const UserRepository = UserRepositoryMock;
        UserRepository.getAll.mockReturnValue(users);
        const _userService = new UserService({ UserRepository });
        const expected = await _userService.getAll();
        expect(expected).toMatchObject(users);
    })

    it("should create an user", async()=>{
        const UserRepository = userRepositoryMock;
        UserRepository.create.mockReturnValue(user);
        const _userService = new UserService({ UserRepository });
        const expected = await _userService.create(user)
        expect(expected).toMatchObject(user)
    })

    it("should update an user by Id", async()=>{
        const UserRepository = userRepositoryMock;
        UserRepository.update.mockReturnValue(user);
        const _userService = new UserService({ UserRepository });
        const expected = await _userService.update(user)
        expect(expected).toMatchObject(user)
    })

    it("should delete an user by Id", async()=>{
        const UserRepository = userRepositoryMock;
        UserRepository.delete.mockReturnValue(user);
        const _userService = new UserService({ UserRepository });
        const expected = await _userService.delete(user._id, user)
        expect(expected).toMatchObject(user)
    })

})