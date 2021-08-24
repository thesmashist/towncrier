module.exports = {
    name: 'hello',
    description: "This is a hello command",
    execute(message, args) {

        if(message.member.roles.cache.has("879347587772211221")) {
            message.channel.send("Hear ye!")
        } else {
            message.channel.send("Ye can't send this command because ye role, let ye town crier change that");
            message.member.add('879347587772211221');
        }
    }
}