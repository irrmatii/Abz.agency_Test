module.exports = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    },
    postToken: (url, data, token) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("position_id", data.position_id);
            formData.append("photo", data.photo);

            fetch(url, {
                method: "POST",
                headers: {
                    Token: token,
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

};