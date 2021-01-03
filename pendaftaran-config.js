function gantiMenu(menu) {
    if (menu == "list-pendaftaran") {
        loadPendaftaran();
        $('#tambah-pendaftaran').hide();
        $('#list-pendaftaran').fadeIn();
        $('#edit-data').hide();
        $('#lihat-data').hide();
    }
    else if (menu == "tambah-pendaftaran") {
        $('#tambah-pendaftaran').fadeIn();
        $('#list-pendaftaran').hide();
        $('#edit-data').hide();
        $('#lihat-data').hide();
    } else if (menu == "edit-data") {
        $('#edit-data').fadeIn();
        $('#tambah-pendaftaran').hide();
        $('#list-pendaftaran').hide();
        $('#lihat-data').hide();
    } else if (menu == "lihat-data") {
        $('#lihat-data').fadeIn();
        $('#edit-data').hide();
        $('#tambah-pendaftaran').hide();
        $('#list-pendaftaran').hide();
    }
}

function simpanData() {
 
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "Pendaftaran baru berhasil disimpan"
        }]).then(function() {
            alert('Pendaftaran Tersimpan');
        }).catch(function(error) {
            alert('Error...');
        });
    }
 
    nama = $('#nama').val();
    nim = $('#nim').val();
    tmplahir = $('#tmplahir').val();
    tanggallahir = $('#tanggallahir').val();
    alamat = $('#alamat').val();
    alasan = $('#alasan').val();
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        id_data = parseInt(localStorage.getItem('id_data'));
    }
    else {
        list_data = [];
        id_data = 0;
    }
 
    id_data++;
    list_data.push({ 'id_data': id_data, 'nama': nama, 'nim': nim, 'tmplahir': tmplahir, 'tanggallahir': tanggallahir, 'alamat': alamat, 'alasan': alasan });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    localStorage.setItem('id_data', id_data);
    document.getElementById('form-data').reset();
    gantiMenu('list-pendaftaran');
 
    return false;
}
 
function simpanEditData() {
 
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "Pendaftaran yang diedit sudah tersimpan"
        }]).then(function() {
            alert('Pendaftaran tersimpan');
        }).catch(function(error) {
            alert('Error...');
        });
    }
 
    id_data = $('#eid_data').val();
    nama = $('#enama').val();
    nim = $('#enim').val();
    tmplahir = $('#etmplahir').val();
    tanggallahir = $('#etanggallahir').val();
    alamat = $('#ealamat').val();
    alasan = $('#ealasan').val();
 
    list_data.push({ 'id_data': id_data, 'nama': nama, 'nim': nim, 'tmplahir': tmplahir, 'tanggallahir': tanggallahir, 'alamat': alamat, 'alasan': alasan });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    document.getElementById('eform-data').reset();
    gantiMenu('list-catatan');
 
    return false;
}
 
function hapusData(id) {
 
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "Pendaftaran sudah terhapus"
        }]).then(function() {
            alert('Pendaftaran sudah dihapus');
        }).catch(function(error) {
            alert('Error...');
        });
    }
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
 
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
 
        localStorage.setItem('list_data', JSON.stringify(list_data));
        loadCatatan();
    }
}