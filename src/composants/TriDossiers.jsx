import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function TrierDossier({triSelection}) {

    const handleChange = (event) => {
        setTri(event.target.value);
    };

    const classes1 = useStyles();
    const [tri, setTri] = triSelection;

  return (
    <div className="TrierDossier">
      <FormControl className={classes1.formControl}>
        <InputLabel id="demo-simple-select-label">Trier les dossiers</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={''} onChange={handleChange} >
          <MenuItem value={['datemodif','desc']}>Trier selon la date de modification</MenuItem>
          <MenuItem value={['nom','asc']}>Trier selon le nom en ordre croissant</MenuItem>
          <MenuItem value={['nom','desc']}>Trier selon le nom en ordre decroissant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}