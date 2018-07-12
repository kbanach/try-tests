const assert = require("assert");

const sinon = require("sinon");

const controller = require('./userController');

assert.equal(typeof controller.create, 'function', 'Create is not a function!');

(async () => {
    const saveSpy = sinon.spy();
    await controller.create({ save: saveSpy });
    assert.ok(saveSpy.calledOnce, 'Save not called');
})();

(async () => {
    const saveSpy = sinon.spy();
    const user = { name: 'Gomez'};
    await controller.create({ save: saveSpy }, user);
    assert.ok(saveSpy.calledOnceWith(user), 'Save not called with passed params');
})();

(async () => {
    const saveSpy = sinon.spy();
    const user = { name: 'Gomez'};
    const createdUser = await controller.create({ save: saveSpy }, user);
    assert.deepEqual(createdUser, user, 'User not returned');
})();

(async () => {
    const saveStub = sinon.stub().throws();
    const user = { name: 'Gomez'};
    let errorObject;
    try{
        errorObject = await controller.create({ save: saveStub }, user);
    } catch(ex) {
        assert.fail('Method shouldn\'t throw an exception');
    }
    assert.deepEqual(errorObject, { error: true }, 'Exception not handled correctly');
})();
