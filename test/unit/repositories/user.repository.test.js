const { UserRepository } = require("../../../src/repositores");
const mockingoose = require("mockingoose");
const { User } = require("../../../src/models");

let { 
        UserModelMock: { users, user} 
    } = require("../../mocks");

describe("User repository Test", ()=>{
    beforeEach(()=>{
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it("should return a user by Id", async()=>{
        const _user = { ...user};
        delete _user.password;
        mockingoose(User).toReturn(user, "findOne");
        const _userRepository = new UserRepository({User});
        const expected = await _userRepository.get(_user._id);

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    })

    it("should find a user by usernanme", async()=>{
        const _user = { ...user};
        delete _user.password;
        mockingoose(User).toReturn(user, "findOne");

        const _userRepository = new UserRepository({User});
        const expected = await _userRepository.getUserByUserName(_user.username)
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    })

    it("Should update an especific user by id", async ()=>{
        const _user = {...user};
        delete _user.password;
        mockingoose(User).toReturn(_user, "findOneAndUpdate");
        const _userRepository = new UserRepository({User});
        const expected = await _userRepository.update(user._id, {
            name:"Megan"
        })
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
    })

    it("should delete an specific user by id", async()=>{
        mockingoose(User).toReturn(user, "findOneAndDelete");
        const _userRepository = new UserRepository({ User });
        const expected = await _userRepository.delete(user._id)
        
        expect(expected).toEqual(true)
    } )

}  )
