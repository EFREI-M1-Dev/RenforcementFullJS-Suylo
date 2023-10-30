import { UserJSONService } from './user.json-service';
import fs from 'fs';

jest.mock('fs')
const fsMock = fs as jest.Mocked<typeof fs>

describe('UserJSONService', () => {
    let sut: UserJSONService

    beforeEach(() => {
        sut = new UserJSONService()
        jest.resetAllMocks()
    })

    describe('getById', () => {
        it('should return null if the user does not exist', () => {
            fsMock.readFileSync.mockReturnValueOnce('[]')
            const result = sut.getById(1)
            expect(result).toBeNull()
        })
    })

})