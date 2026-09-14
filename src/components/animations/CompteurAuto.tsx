import { useState, useEffect } from "react";

const CompteurAutomatique = ({ max }: { max: number }) => {
  // Utilisation du Hook useState pour gérer le compteur.
  const [compteur, setCompteur] = useState(0);

  // Effet hook useEffect pour mettre à jour le compteur et le reséinitialiser
  useEffect(() => {
    let intervalId: number;

    if (compteur < max) {
      intervalId = setInterval(() => {
        setCompteur((prevCompteur) => prevCompteur + 1);
      }, 70); // Incrémente de 1 toutes les secondes (70ms). Modifiez cette valeur pour changer la vitesse.
    }

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage ou du changement de `max`
  }, [compteur, max]); // Dépendances : le compteur et max. L'effet s'exécute si `compteur` ou `max` changent.

  return <div>{compteur}</div>;
};

export default CompteurAutomatique;
