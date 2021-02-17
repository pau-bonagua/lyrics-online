$(document).ready(()=>{
SONG.load();
});



const SONG = (()=>{

    let _cur_id = 0;
    let _token = $('#lara_token').val();
    
    let song = {};

    song.create = () =>
    {
        alert('clicked');
        $.ajax({
            type:'POST',
            url:`http://localhost/lyrics-online/public/songs`,
            data:
            {
                _method:'POST',
                _token: _token,
                artist: $('#inp_artist_create').val(),
                title: $('#inp_title_create').val(),
                lyrics: $('#inp_lyrics_create').val(),
            },
            cache:false,
            success: () =>
            {
                SONG.load();
            }
        });
    }


    song.load = () =>
    {
        $.ajax({
            url:'http://localhost/lyrics-online/public/songs-load',
            type:'get',
            cache:false,
            dataType:'json',
            success:(data) =>{
                console.log(data);

                let tbody = '';
                data.forEach((song)=>{
                    tbody+=`
                    <tr>
                                                <td>${song.artist}</td>
                                                <td>${song.title}</td>
                                                <td>${song.created_at}</td>
                                                <td>
                                                <button class="btn btn-primary" onclick="SONG.edit(${song.id})">Edit</button>
                                     
                                                </td>
                                            </tr>
                    `;
                });
                $('#table_songs tbody').html(tbody);
            }


        });
    }

    song.edit = (id) =>
    {
        _cur_id = id;
        console.log(_token);
        $.ajax({
            type:'get',
            url:`http://localhost/lyrics-online/public/songs/${id}`,
            dataType:'json',
            cache:false,
            success: (song) =>
            {
                console.log(song);
                $('#modal_song').modal('show');
                $('#modal_song_title').html(song.title);
                $('#inp_title_update').val(song.title);
                $('#inp_artist_update').val(song.artist);
                $('#inp_lyrics_update').html(song.lyrics);
            }
        });
       
    }

    song.update = () =>
    {
        alert('update2');
        $.ajax({
            type:'POST',
            url:`http://localhost/lyrics-online/public/songs/${_cur_id}`,
            data:
            {
                _method:'PATCH',
                _token: _token,
                artist: $('#inp_artist_update').val(),
                title: $('#inp_title_update').val(),
                lyrics: $('#inp_lyrics_update').val(),
            },
            cache:false,
            success: () =>
            {
                alert('Updated');
                $('#modal_song').modal('hide');
                SONG.load();

            }
        });
    }

    song.delete = () =>
    {

        $.ajax({
            type:'POST',
            url:`http://localhost/lyrics-online/public/songs/${_cur_id}`,
            data:
            {
                _method:'DELETE',
                _token: _token,
            },
            cache:false,
            success: () =>
            {
                alert('Deleted');
                SONG.load();

            }
        });
    }

    

    





    return song;
})();